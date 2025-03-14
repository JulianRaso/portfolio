function About({ userAbout }) {
  return (
    <div>
      <h1 className="text-xl font-bold sm:text-2xl">Sobre mí</h1>
      <p className="sm:text-xl text-justify">{userAbout}</p>
    </div>
  );
}

export default About;
