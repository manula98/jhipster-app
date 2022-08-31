import publisher from 'app/entities/publisher/publisher.reducer';
import author from 'app/entities/author/author.reducer';
import client from 'app/entities/client/client.reducer';
import book from 'app/entities/book/book.reducer';
import borrowedBook from 'app/entities/borrowed-book/borrowed-book.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  publisher,
  author,
  client,
  book,
  borrowedBook,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
