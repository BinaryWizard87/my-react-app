function Button() {
  const styles = {
    backgroundColor: "hsl(200, 1000%, 56%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  return (
    <button style={styles}>
      <a href="google.com">google.com</a>
    </button>
  );
}

export default Button;
