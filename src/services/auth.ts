export async function loginUser(username: string, password: string) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Login failed");
    }

    return res.json();
}