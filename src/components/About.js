import React from "react";
import Rainbow from '../hoc/Rainbow'

 function About() {
  return (
    <div>
      <div className="container">
        <h4 className="center">About</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          placeat dolores repellendus accusantium fuga, quaerat ea quae rerum?
          Tempora fugit suscipit temporibus vel soluta consequuntur et
          laudantium distinctio dignissimos voluptatem!
        </p>
      </div>
    </div>
  );
}
export default Rainbow(About)