import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/CepChecker.scss";
import { toast } from "react-toastify";

const EXPIRATION_TIME = 15 * 60 * 1000; // 15 minutos

const CepChecker = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState("");

  const formatCep = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 8);
    return numeric.replace(/^(\d{5})(\d{0,3})$/, "$1-$2");
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cepData") || "null");
    if (saved && Date.now() - saved.timestamp < EXPIRATION_TIME) {
      setCep(saved.cep);
      setAddress(saved.address);
    }
  }, []);

  const handleSearch = async () => {
  const rawCep = cep.replace(/\D/g, "");

  if (!rawCep || rawCep.length !== 8) {
    setError("Digite um CEP válido com 8 dígitos.");
    return;
  }
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (res.data.erro) {
        setError("CEP não encontrado.");
        setAddress(null);
      } else {
        setAddress(res.data);
        setError("");
        toast.success(`Ótima notícia! Entregamos nesse endereço 😊`);
        localStorage.setItem(
          "cepData",
          JSON.stringify({
            cep,
            address: res.data,
            timestamp: Date.now(),
          })
        );
      }
    } catch {
      setError("Erro ao buscar o CEP.");
    }
  };

  return (
    <div className="cep-checker">
      <h3>Calcular frete e prazo de entrega</h3>
      <div className="input-group">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(formatCep(e.target.value))}
          placeholder="Digite o CEP (ex: 01001000)"
          maxLength={9}
        />
        <button onClick={handleSearch}>Verificar</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {address && (
        <div className="address-info">
          <p>
            <span>Endereço:</span> {address.logradouro}
          </p>
          <p>
            <span>Bairro:</span> {address.bairro}
          </p>
          <p>
            <span>Cidade:</span> {address.localidade} - {address.uf}
          </p>
          <br />
          <p>
            <span>Prazo de entrega:</span> Em até 7 dias úteis
          </p>
          <p>
            <span>Frete:</span> Grátis
          </p>
        </div>

      )}
    </div>
  );
};

export default CepChecker;
