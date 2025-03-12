export async function GithubRepo() {
  const data = await fetch("https://api.github.com/users/julianraso/repos")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  return data;
}
