import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação será implementada depois
    console.log('Form submitted', { email, password, type: activeTab });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-3 mb-8 cursor-pointer">
          <img src="https://public.readdy.ai/ai/img_res/dba07dec-0e6a-4bcc-ae25-2d9b5c75ca2a.png" alt="Premiei" className="h-12 w-12" />
          <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Premiei</span>
        </Link>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'login'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Entrar
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Criar conta
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm"
                placeholder="••••••••"
                required
              />
            </div>

            {activeTab === 'login' && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded cursor-pointer" />
                  <span className="text-white/60">Lembrar de mim</span>
                </label>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                  Esqueceu a senha?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-4 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all whitespace-nowrap cursor-pointer"
            >
              {activeTab === 'login' ? 'Entrar' : 'Criar Conta'}
            </button>
          </form>

          {/* Info */}
          {activeTab === 'register' && (
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <p className="text-sm text-cyan-300 text-center">
                <i className="ri-information-line mr-1"></i>
                Após criar conta você será direcionado para pagamento para liberar o acesso
              </p>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
              <i className="ri-arrow-left-line mr-1"></i>
              Voltar para home
            </Link>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/40">
            <i className="ri-shield-check-line text-green-400 mr-1"></i>
            Seus dados estão seguros e protegidos
          </p>
        </div>
      </div>
    </div>
  );
}
