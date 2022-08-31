import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BorrowedBook from './borrowed-book';
import BorrowedBookDetail from './borrowed-book-detail';
import BorrowedBookUpdate from './borrowed-book-update';
import BorrowedBookDeleteDialog from './borrowed-book-delete-dialog';

const BorrowedBookRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BorrowedBook />} />
    <Route path="new" element={<BorrowedBookUpdate />} />
    <Route path=":id">
      <Route index element={<BorrowedBookDetail />} />
      <Route path="edit" element={<BorrowedBookUpdate />} />
      <Route path="delete" element={<BorrowedBookDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BorrowedBookRoutes;
