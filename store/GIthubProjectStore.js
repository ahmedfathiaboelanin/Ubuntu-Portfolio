import { create } from 'zustand';

const useGithubProjectsStore = create((set) => ({
    randomRepos: [],
    loading: true,

    getRandomStarredRepos: async () => {
        set({ loading: true });

        try {
            const res = await fetch('https://api.github.com/user/repos?per_page=100', {
                headers: {
                    Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github+json'
                }
            });

            const data = await res.json();

            if (res.ok) {
                const starredRepos = data.filter((repo) => repo.stargazers_count > 0);

                // Shuffle array
                const shuffled = starredRepos.sort(() => 0.5 - Math.random());

                // Pick first 15
                const selected = shuffled.slice(0, 15);

                set({
                    randomRepos: selected,
                    loading: false,
                });
            } else {
                console.error('Failed to fetch repos:', data);
                set({ loading: false });
            }
        } catch (err) {
            console.error('Error fetching repos:', err);
            set({ loading: false });
        }
    },
}));

export default useGithubProjectsStore;
