import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  // Si hay autenticación, verificar usuario y contraseña
  if (authHeader) {
    const authValue = authHeader.split(" ")[1];
    const [user, pass] = atob(authValue).split(":");

    if (user === process.env.AUTH_USER && pass === process.env.AUTH_PASSWORD) {
      return NextResponse.next(); // Permitir acceso
    }
  }

  // Si no hay autenticación, pedir credenciales
  return new NextResponse("Acceso denegado", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// 🔽 Aplica el middleware a TODAS las rutas o cambia el path si lo necesitas
export const config = {
  matcher: "/(.*)",
};
