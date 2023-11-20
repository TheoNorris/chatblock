const Comment = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 my-4">
      <div className="flex items-center">
        <img src="" className="rounded-full h-12 w-12" alt="" />
        <div className="ml-4">
          <h5 className="text-xl font-bold">Subject</h5>
          <h6 className="text-gray-500">Username · Time</h6>
        </div>
      </div>
      <p className="mt-4">
        dfvwefgweg efgwefbgefg wefbgef gefg gfgrfgegf fgeg e gfer g gegegeg
        regege gggeg eger hjyj uk6i6 r iri ui 5uoi 5uoi ytu 45 34 tyewr wer
      </p>
      <div className="flex items-center mt-4">
        <button className="text-blue-500 mr-4">LIKES</button>
        <span>
          <p>5</p>
        </span>
        <button className="text-blue-500 ml-4">COMMENTS</button>
      </div>
      <p className="text-gray-500 mt-4">VIEW MORE COMMENTS..</p>
      <div className="flex items-center mt-4">
        <img src="" className="rounded-full h-10 w-10" alt="" />
        <div className="ml-4">
          <div className="bg-gray-100 p-3 rounded-md">
            <div className="flex items-center">
              <h6 className="text-gray-500">USERNAME · TIME</h6>
            </div>
            <p className="mt-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="text-blue-500 mt-2">LIKES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
