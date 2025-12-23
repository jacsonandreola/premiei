import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://public.readdy.ai/ai/img_res/dba07dec-0e6a-4bcc-ae25-2d9b5c75ca2a.png" alt="Premiei" className="h-10 w-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Premiei</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="px-6 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Entrar
            </Link>
            <Link to="/login" className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap cursor-pointer">
              Criar Conta
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">Premiei</span>
              <br />
              <span className="text-4xl md:text-5xl text-white/90">Gere apostas, analise resultados</span>
              <br />
              <span className="text-4xl md:text-5xl text-white/90">e confira automaticamente</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-3xl mx-auto">
              Todos os jogos da Loteria Federal em um só lugar. Acesso vitalício.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/login" className="px-8 py-4 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 transition-all whitespace-nowrap cursor-pointer">
                CRIAR CONTA E LIBERAR AGORA
              </Link>
              <button className="px-8 py-4 text-base font-medium bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer">
                VER COMO FUNCIONA
              </button>
            </div>
          </div>

          {/* Mega da Virada Card - Destaque */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500 rounded-full whitespace-nowrap">
                  🔥 DESTAQUE
                </span>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    MEGA DA VIRADA
                  </h3>
                  <p className="text-5xl font-black text-white mb-2">R$ 1.000.000.000</p>
                  <p className="text-white/60 text-sm mb-4">Prêmio estimado</p>
                  <div className="flex items-center gap-2 text-sm text-orange-400">
                    <i className="ri-fire-fill"></i>
                    <span className="font-medium">Alta procura</span>
                  </div>
                </div>
                <Link to="/dashboard" className="px-8 py-4 text-base font-bold bg-gradient-to-r from-orange-500 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-orange-500/40 transition-all whitespace-nowrap cursor-pointer">
                  Gerar Apostas Especiais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Por que escolher o Premiei?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'ri-magic-line', title: 'Gerador Inteligente', desc: 'Algoritmos avançados para gerar apostas baseadas em estatísticas e padrões' },
              { icon: 'ri-history-line', title: 'Histórico Completo', desc: 'Acesse todos os resultados históricos de todos os jogos da loteria' },
              { icon: 'ri-checkbox-circle-line', title: 'Conferência Automática', desc: 'Marque "vou jogar" e receba notificação se ganhar' },
              { icon: 'ri-file-pdf-line', title: 'PDF para Impressão', desc: 'Gere PDFs prontos para levar na lotérica' },
              { icon: 'ri-notification-3-line', title: 'Notificações em Tempo Real', desc: 'Receba alertas dos resultados assim que saírem' },
              { icon: 'ri-bar-chart-box-line', title: 'Análise Estatística', desc: 'Veja frequências, atrasos e padrões dos números' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer group">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-2xl text-cyan-400`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jogos Suportados */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Todos os jogos em um só lugar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Mega-Sena', color: 'from-green-500 to-emerald-600' },
              { name: 'Quina', color: 'from-purple-500 to-pink-600' },
              { name: 'Lotofácil', color: 'from-pink-500 to-rose-600' },
              { name: 'Lotomania', color: 'from-orange-500 to-red-600' },
              { name: 'Dupla Sena', color: 'from-purple-500 to-indigo-600' },
              { name: 'Timemania', color: 'from-green-500 to-teal-600' },
              { name: 'Federal', color: 'from-blue-500 to-cyan-600' },
              { name: 'Dia de Sorte', color: 'from-yellow-500 to-orange-600' },
              { name: 'Super Sete', color: 'from-red-500 to-pink-600' }
            ].map((jogo, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all text-center cursor-pointer group">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${jogo.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <i className="ri-trophy-line text-2xl text-white"></i>
                </div>
                <h3 className="font-bold text-sm">{jogo.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Gere suas apostas', desc: 'Use nossos algoritmos inteligentes para criar apostas otimizadas' },
              { num: '2', title: 'Marque "vou jogar"', desc: 'Indique quais apostas você realmente vai fazer na lotérica' },
              { num: '3', title: 'Premiei confere e avisa', desc: 'Receba notificação automática se suas apostas forem premiadas' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <i className="ri-arrow-right-line text-3xl text-cyan-500/30"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Acesso vitalício por apenas</h2>
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 mb-8">
            <div className="text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              R$ 9,90
            </div>
            <p className="text-2xl text-white/80 mb-6">Pagamento único</p>
            <p className="text-white/60 mb-8">Sem mensalidades. Sem taxas escondidas. Acesso para sempre.</p>
            <Link to="/login" className="inline-block px-12 py-5 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 transition-all whitespace-nowrap cursor-pointer">
              EU QUERO O PREMIEI
            </Link>
          </div>
          <p className="text-sm text-white/40">
            * O Premiei não garante prêmios. Oferecemos apenas sugestões estatísticas baseadas em dados históricos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: 'O Premiei garante que vou ganhar?', a: 'Não. O Premiei é uma ferramenta de análise estatística que gera sugestões de apostas baseadas em dados históricos. Não há garantia de prêmios.' },
              { q: 'Como funciona o pagamento?', a: 'Pagamento único de R$ 9,90 que libera acesso vitalício à plataforma. Sem mensalidades ou taxas recorrentes.' },
              { q: 'Como funciona a conferência automática?', a: 'Ao marcar uma aposta como "vou jogar", o sistema automaticamente confere quando o resultado sair e te notifica caso você tenha ganhado.' },
              { q: 'Posso usar em qualquer dispositivo?', a: 'Sim! O Premiei funciona em desktop, tablet e celular.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-white/60 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-gradient-to-br from-teal-500/5 to-cyan-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <img src="https://public.readdy.ai/ai/img_res/dba07dec-0e6a-4bcc-ae25-2d9b5c75ca2a.png" alt="Premiei" className="h-8 w-8" />
              <span className="text-xl font-bold">Premiei</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacidade</a>
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Powered by Readdy</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-white/40">
            © 2024 Premiei. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
