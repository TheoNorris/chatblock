import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="text-center text-3xl font-bold text-gray-800">
        {type} Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 m-auto w-full max-w-2xl gap-7 flex-start flex-col glassmorphism"
      >
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-600"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          onChange={(e) => setPost({ ...post, subject: e.target.value })}
          placeholder="Subject..."
          value={post.subject}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />

        <label
          htmlFor="post"
          className="block mt-4 text-sm font-medium text-gray-600"
        >
          {type} post
        </label>
        <textarea
          id="post"
          name="post"
          value={post.newPost}
          onChange={(e) => setPost({ ...post, newPost: e.target.value })}
          placeholder="Write your comment here..."
          rows="4"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        ></textarea>
        <div className="flex justify-end">
          <Link href="/profilepage" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
