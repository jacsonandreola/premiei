import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: 'ri-dashboard-line', label: 'Dashboard' },
    { path: '/gerar-apostas', icon: 'ri-magic-line', label: 'Gerar Apostas' },
    { path: '/tickets', icon: 'ri-ticket-line', label: 'Tickets' },
    { path: '/historico', icon: 'ri-history-line', label: 'Histórico' },
    { path: '/notificacoes', icon: 'ri-notification-3-line', label: 'Notificações' }
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
      {/* Logo */}
      <Link to="/dashboard" className="flex items-center gap-3 mb-12 cursor-pointer group">
        <img src="https://public.readdy.ai/ai/img_res/dba07dec-0e6a-4bcc-ae25-2d9b5c75ca2a.png" alt="Premiei" className="h-10 w-10 group-hover:scale-110 transition-transform" />
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Premiei</span>
      </Link>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer group ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white shadow-lg shadow-cyan-500/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                isActive ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-white/5 group-hover:bg-white/10'
              }`}>
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer group">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
            <i className="ri-user-line text-lg"></i>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-white truncate">Usuário</p>
            <p className="text-xs text-white/60">Status: PRO</p>
          </div>
          <i className="ri-logout-box-line text-white/40 group-hover:text-white transition-colors"></i>
        </div>
      </div>
    </aside>
  );
}
