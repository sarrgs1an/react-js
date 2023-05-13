function MyForm() {
  return (
    <div id='form'>
      <form id="login">
        <label htmlFor="fname">FirstName:</label>
        <input type="text" id="fname" name="fname" /><br></br>
        <label htmlFor="lname">LastName:</label>
        <input type="text" id="lname" name="lname" /> <br></br>
        <label htmlFor="email"> Email: </label> <br></br>
        <input type="text" />
        <label htmlFor="remeber">Remember me</label>
        <input input type="checkbox" id="remember-me" /><br></br>
        <button type="submit" id="sub">Log in</button>
      </form>

    </div>

  );
}

export default MyForm;

