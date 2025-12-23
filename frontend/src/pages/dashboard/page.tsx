import { Link } from 'react-router-dom';
import Sidebar from '../../components/feature/Sidebar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Sidebar />
      
      <div className="ml-72 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-white/60 text-sm">Bem-vindo de volta! Confira suas apostas e resultados.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
              <span className="text-sm font-bold text-purple-300">✨ Status: PRO</span>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl cursor-pointer hover:scale-110 transition-transform">
              <i className="ri-user-line text-xl"></i>
            </div>
          </div>
        </div>

        {/* Mega da Virada - Destaque */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl"></div>
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
              <Link to="/gerar-apostas" className="px-8 py-4 text-base font-bold bg-gradient-to-r from-orange-500 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-orange-500/40 transition-all whitespace-nowrap cursor-pointer">
                Gerar Apostas Agora
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: 'ri-ticket-line', label: 'Tickets Ativos', value: '12', color: 'from-cyan-500 to-blue-600' },
            { icon: 'ri-checkbox-circle-line', label: 'Conferidos', value: '45', color: 'from-green-500 to-emerald-600' },
            { icon: 'ri-trophy-line', label: 'Prêmios', value: '3', color: 'from-yellow-500 to-orange-600' },
            { icon: 'ri-magic-line', label: 'Apostas Geradas', value: '128', color: 'from-purple-500 to-pink-600' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-xl`}>
                  <i className={`${stat.icon} text-xl`}></i>
                </div>
                <i className="ri-arrow-right-up-line text-green-400"></i>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Últimos Resultados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Mega-Sena */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Mega-Sena</h3>
                <p className="text-white/60 text-sm">Concurso 2.650 - 15/01/2024</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <i className="ri-trophy-line text-xl"></i>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              {[12, 23, 34, 45, 56, 60].map((num, idx) => (
                <div key={idx} className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl font-bold">
                  {num}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Prêmio: R$ 45.000.000</span>
              <Link to="/historico" className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                Ver detalhes <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>

          {/* Lotofácil */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Lotofácil</h3>
                <p className="text-white/60 text-sm">Concurso 2.980 - 15/01/2024</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
                <i className="ri-trophy-line text-xl"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 24, 25].map((num, idx) => (
                <div key={idx} className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-lg font-bold text-sm">
                  {num}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Prêmio: R$ 1.500.000</span>
              <Link to="/historico" className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                Ver detalhes <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Tickets e Notificações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets Pendentes */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Tickets Pendentes</h3>
              <Link to="/tickets" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm cursor-pointer">
                Ver todos <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { jogo: 'Mega-Sena', concurso: '2.651', numeros: 6, data: '18/01/2024' },
                { jogo: 'Quina', concurso: '6.320', numeros: 5, data: '17/01/2024' },
                { jogo: 'Lotofácil', concurso: '2.981', numeros: 15, data: '16/01/2024' }
              ].map((ticket, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      <i className="ri-ticket-line"></i>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{ticket.jogo}</p>
                      <p className="text-white/60 text-xs">Concurso {ticket.concurso}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{ticket.numeros} números</p>
                    <p className="text-white/60 text-xs">{ticket.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notificações */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Notificações</h3>
              <Link to="/notificacoes" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm cursor-pointer">
                Ver todas
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { icon: 'ri-trophy-line', text: 'Você acertou 4 números na Quina!', time: '2h', color: 'from-yellow-500 to-orange-600' },
                { icon: 'ri-notification-3-line', text: 'Resultado da Mega-Sena disponível', time: '5h', color: 'from-green-500 to-emerald-600' },
                { icon: 'ri-magic-line', text: 'Nova aposta gerada com sucesso', time: '1d', color: 'from-purple-500 to-pink-600' }
              ].map((notif, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
                  <div className={`w-8 h-8 flex items-center justify-center bg-gradient-to-br ${notif.color} rounded-lg flex-shrink-0`}>
                    <i className={`${notif.icon} text-sm`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/90">{notif.text}</p>
                    <p className="text-xs text-white/40 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
