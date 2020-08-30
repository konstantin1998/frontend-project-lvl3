const app = () => {
  const form = document.getElementById('urlForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log([...formData.values()]);
  });
};

export default app;
