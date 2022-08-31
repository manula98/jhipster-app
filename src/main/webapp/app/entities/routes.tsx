import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Publisher from './publisher';
import Author from './author';
import Client from './client';
import Book from './book';
import BorrowedBook from './borrowed-book';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="publisher/*" element={<Publisher />} />
        <Route path="author/*" element={<Author />} />
        <Route path="client/*" element={<Client />} />
        <Route path="book/*" element={<Book />} />
        <Route path="borrowed-book/*" element={<BorrowedBook />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
