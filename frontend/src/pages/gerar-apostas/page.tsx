import { useState } from 'react';
import Sidebar from '../../components/feature/Sidebar';

export default function GerarApostas() {
  const [jogoSelecionado, setJogoSelecionado] = useState('mega-sena');
  const [quantidadeNumeros, setQuantidadeNumeros] = useState(6);
  const [quantidadeApostas, setQuantidadeApostas] = useState(1);
  const [metodo, setMetodo] = useState('aleatorio');
  const [vouJogar, setVouJogar] = useState(false);
  const [numerosSelecionados, setNumerosSelecionados] = useState<number[]>([]);
  const [apostasGeradas, setApostasGeradas] = useState<number[][]>([]);

  const toggleNumero = (num: number) => {
    if (numerosSelecionados.includes(num)) {
      setNumerosSelecionados(numerosSelecionados.filter(n => n !== num));
    } else {
      if (numerosSelecionados.length < quantidadeNumeros) {
        setNumerosSelecionados([...numerosSelecionados, num]);
      }
    }
  };

  const limparSelecao = () => {
    setNumerosSelecionados([]);
  };

  const gerarSurpresinha = () => {
    const numeros: number[] = [];
    while (numeros.length < quantidadeNumeros) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(num)) {
        numeros.push(num);
      }
    }
    setNumerosSelecionados(numeros.sort((a, b) => a - b));
  };

  const gerarApostas = () => {
    const novasApostas: number[][] = [];
    for (let i = 0; i < quantidadeApostas; i++) {
      const numeros: number[] = [];
      while (numeros.length < quantidadeNumeros) {
        const num = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(num)) {
          numeros.push(num);
        }
      }
      novasApostas.push(numeros.sort((a, b) => a - b));
    }
    setApostasGeradas(novasApostas);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Sidebar />
      
      <div className="ml-72 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Gerar Apostas</h1>
          <p className="text-white/60 text-sm">Configure e gere suas apostas inteligentes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configurações - Esquerda */}
          <div className="lg:col-span-1 space-y-6">
            {/* Jogo */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <label className="block text-sm font-bold mb-3">Jogo</label>
              <select
                value={jogoSelecionado}
                onChange={(e) => setJogoSelecionado(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                <option value="mega-sena">Mega-Sena</option>
                <option value="quina">Quina</option>
                <option value="lotofacil">Lotofácil</option>
                <option value="lotomania">Lotomania</option>
              </select>
            </div>

            {/* Quantidade de Números */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <label className="block text-sm font-bold mb-3">Quantidade de Números</label>
              <select
                value={quantidadeNumeros}
                onChange={(e) => setQuantidadeNumeros(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                <option value="6">6 números</option>
                <option value="7">7 números</option>
                <option value="8">8 números</option>
                <option value="9">9 números</option>
                <option value="10">10 números</option>
                <option value="15">15 números</option>
              </select>
            </div>

            {/* Quantidade de Apostas */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <label className="block text-sm font-bold mb-3">Quantidade de Apostas</label>
              <select
                value={quantidadeApostas}
                onChange={(e) => setQuantidadeApostas(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                <option value="1">1 aposta</option>
                <option value="5">5 apostas</option>
                <option value="10">10 apostas</option>
                <option value="20">20 apostas</option>
              </select>
            </div>

            {/* Método */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <label className="block text-sm font-bold mb-3">Método</label>
              <div className="space-y-2">
                {[
                  { value: 'aleatorio', label: 'Aleatório', icon: 'ri-shuffle-line' },
                  { value: 'balanceado', label: 'Balanceado', icon: 'ri-scales-line' },
                  { value: 'frequencia', label: 'Frequência', icon: 'ri-bar-chart-line' },
                  { value: 'atraso', label: 'Atraso', icon: 'ri-time-line' },
                  { value: 'anti-repeticao', label: 'Anti-repetição', icon: 'ri-refresh-line' }
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMetodo(m.value)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm cursor-pointer ${
                      metodo === m.value
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white'
                        : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <i className={m.icon}></i>
                    <span className="font-medium">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Vou Jogar */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={vouJogar}
                  onChange={(e) => setVouJogar(e.target.checked)}
                  className="w-5 h-5 rounded cursor-pointer"
                />
                <span className="text-sm font-medium">✅ Vou jogar essas apostas</span>
              </label>
            </div>

            {/* Botões */}
            <div className="space-y-3">
              <button
                onClick={gerarApostas}
                className="w-full px-6 py-4 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-magic-line mr-2"></i>
                GERAR APOSTAS
              </button>
              <button className="w-full px-6 py-4 text-base font-medium bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer">
                <i className="ri-file-pdf-line mr-2"></i>
                GERAR PDF
              </button>
            </div>
          </div>

          {/* Grid de Dezenas - Direita */}
          <div className="lg:col-span-2 space-y-6">
            {/* Volante */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Selecione os Números</h3>
                <div className="text-sm">
                  <span className="text-white/60">Selecionados: </span>
                  <span className="font-bold text-cyan-400">{numerosSelecionados.length} / {quantidadeNumeros}</span>
                </div>
              </div>

              {/* Grid de Números */}
              <div className="grid grid-cols-10 gap-2 mb-6">
                {Array.from({ length: 60 }, (_, i) => i + 1).map((num) => {
                  const selecionado = numerosSelecionados.includes(num);
                  return (
                    <button
                      key={num}
                      onClick={() => toggleNumero(num)}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm font-bold transition-all cursor-pointer ${
                        selecionado
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                          : 'bg-white/5 border-2 border-dashed border-white/20 text-white/60 hover:bg-white/10 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {num.toString().padStart(2, '0')}
                    </button>
                  );
                })}
              </div>

              {/* Surpresinha */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm font-medium text-white/80">Surpresinha:</span>
                  <select
                    value={quantidadeNumeros}
                    onChange={(e) => setQuantidadeNumeros(Number(e.target.value))}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500/50 cursor-pointer"
                  >
                    <option value="6">6 dezenas</option>
                    <option value="7">7 dezenas</option>
                    <option value="8">8 dezenas</option>
                    <option value="9">9 dezenas</option>
                    <option value="10">10 dezenas</option>
                  </select>
                  <button
                    onClick={gerarSurpresinha}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all whitespace-nowrap cursor-pointer"
                  >
                    OK
                  </button>
                  <button
                    onClick={limparSelecao}
                    className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Limpar
                  </button>
                </div>
              </div>
            </div>

            {/* Apostas Geradas */}
            {apostasGeradas.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">Apostas Geradas</h3>
                <div className="space-y-4">
                  {apostasGeradas.map((aposta, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-cyan-400">Aposta {idx + 1}</span>
                        <span className="text-xs text-white/60">{aposta.length} números</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {aposta.map((num, numIdx) => (
                          <div
                            key={numIdx}
                            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-sm font-bold"
                          >
                            {num.toString().padStart(2, '0')}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
