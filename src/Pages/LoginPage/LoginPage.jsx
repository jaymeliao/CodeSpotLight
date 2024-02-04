import React from 'react';

function LoginPage({error,handleLogin}) {
    return (
        <div>
             <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
            
        </div>
    );
}

export default LoginPage;