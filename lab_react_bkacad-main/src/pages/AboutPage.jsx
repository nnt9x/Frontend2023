export function AboutPage() {
	return (
		<div className="container">
			<h1 className="text-center">DummyJSON</h1>
			<p style={{ textAlign: "justify" }}>
				DummyJSON.com provides different types of REST Endpoints filled
				with JSON data which you can use in developing the frontend with
				your favorite framework and library without worrying about
				writing a backend.
			</p>
			<p className="fw-bold">Why?</p>
			<p>
				Most of the time when we create a front-end application or
				website for learning or for client, we have to rely on the
				backend to implement the front-end or if we want to create a
				simple learning application we have to use hard-coded data,
				recently I found myself in need of some data. I didn't like the
				idea of using some public API because I had the feeling that I
				was spending more time registering a client and understanding a
				complex API than focusing on my task. So I decided to code a
				simple backend server that solved my problem, and here's
				DummyJSON. You can find it running here and are free to use it
				in your developments and prototypes: https://dummyjson.com. I
				hope you will find it useful.
			</p>
		</div>
	);
}
