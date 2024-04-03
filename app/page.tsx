import { login } from "./login.action";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="">
        <h1>Login Page</h1>
        <br />
        <p>
          Clicking login without the checkbox checked will set the auth cookie,
          however if reset cookies and check the box to stream back dashboard
          page the cookie will not be in the network response since the
          dashboard cookie in middleware overwrites the cookie respones header.
        </p>
        <form className="mt-4" action={login}>
          <label>
            Redirect to cookie page after login:
            <input type="checkbox" name="shouldRedirect" />
          </label>
          <br />
          <button type="submit" className="bg-gray-600 rounded-sm p-1">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
