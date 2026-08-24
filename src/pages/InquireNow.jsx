function InquireNow() {
  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      padding: "100px 20px",
      boxSizing: "border-box",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-100px",
    },

    sectionTitle: {
      width: "100%",
      maxWidth: "850px",
      textAlign: "center",
      marginBottom: "45px",
    },

    eyebrow: {
      display: "inline-block",
      color: "#6E6D6E",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
      marginTop: "100px",
    },

    heading: {
      margin: "0 0 15px",
      fontSize: "clamp(38px, 5vw, 55px)",
      fontWeight: "700",
      lineHeight: "1.1",
      color: "#fff",
    },

    paragraph: {
      margin: "0 auto",
      maxWidth: "650px",
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#6E6D6E",
    },

    form: {
      width: "100%",
      maxWidth: "850px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      padding: "35px",
      boxSizing: "border-box",
      borderRadius: "22px",
      background: "#000",
      border: "1px solid rgba(163, 35, 64, 0.4)",
      boxShadow: "0 20px 60px rgba(163, 35, 64, 0.12)",
    },

    input: {
      width: "100%",
      height: "55px",
      padding: "0 18px",
      boxSizing: "border-box",
      border: "1px solid #A32340",
      borderRadius: "10px",
      outline: "none",
      background: "#A32340",
      color: "#fff",
      fontSize: "15px",
    },

    textarea: {
      gridColumn: "1 / -1",
      width: "100%",
      minHeight: "150px",
      padding: "16px 18px",
      boxSizing: "border-box",
      border: "1px solid #A32340",
      borderRadius: "10px",
      outline: "none",
      resize: "vertical",
      background: "#A32340",
      color: "#fff",
      fontSize: "15px",
      fontFamily: "inherit",
    },

    button: {
      gridColumn: "1 / -1",
      width: "100%",
      height: "55px",
      border: "none",
      borderRadius: "10px",
      background: "#A32340",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.section}>

      <div style={styles.sectionTitle}>
        <span style={styles.eyebrow}>DEEPSKILLS INQUIRY</span>

        <h2 style={styles.heading}>
          Interested in joining DeepSkill?
        </h2>

        <p style={styles.paragraph}>
          Fill in your details and our counsellor will get in touch within 24 hours.
        </p>
      </div>

      <form
        style={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          style={styles.input}
          placeholder="Full Name"
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Email Address"
        />

        <input
          style={styles.input}
          placeholder="Phone Number"
        />

        <input
          style={styles.input}
          placeholder="Course / Program"
        />

        <textarea
          style={styles.textarea}
          placeholder="Your Message"
        />

        <button
          style={styles.button}
          type="submit"
        >
          Submit Inquiry
        </button>

      </form>
    </section>
  );
}

export default InquireNow;