interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.verhuurbeheertorremolinos.nl") {
      url.protocol = "https:";
      url.hostname = "verhuurbeheertorremolinos.nl";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const locale = url.pathname === "/en" || url.pathname.startsWith("/en/")
      ? "en"
      : url.pathname === "/es" || url.pathname.startsWith("/es/")
        ? "es"
        : null;
    if (locale && response.headers.get("content-type")?.includes("text/html")) {
      const headers = new Headers(response.headers);
      headers.delete("content-length");
      const html = (await response.text()).replace('<html lang="nl"', `<html lang="${locale}"`);
      return new Response(html, { status: response.status, statusText: response.statusText, headers });
    }
    return response;
  },
};
