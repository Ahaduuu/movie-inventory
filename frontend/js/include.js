export async function loadHTML(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        container.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}
