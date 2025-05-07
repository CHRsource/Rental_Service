function NotFoundPage() {
  return (
    <section className="not-found container" style={{ textAlign: 'center', padding: '50px 0' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px' }}>
        Sorry, the page you are looking for does not exist.
      </p>
    </section>
  );
}

export { NotFoundPage };
