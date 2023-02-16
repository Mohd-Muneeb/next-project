import React from 'react'

export const AddEvent = () => {
  return (
//     <style>
//     p {
//       text-align: center;
//       font-size: 1rem;
//       font-weight: bold;
//       color: #009970;
//     }
//   </style>
  
  <section class="section-bg services">
      <div class="form-section">
          <div class="section-title">
              <h2>Event details</h2>
          </div>
          <form action="{{ url_for('add_event') }}" method="post" enctype="multipart/form-data">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" />
              </div>
              <div class="form-group">
                <label for="subtitle">Subtitle</label>
                <input type="text" class="form-control" id="subtitle" name="subtitle" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea rows="3" class="form-control" id="description" name="description"></textarea>
              </div>
              <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control" id="image" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg,image/png" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
  </section>
  )
}
