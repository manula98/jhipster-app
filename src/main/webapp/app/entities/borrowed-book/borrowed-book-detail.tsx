import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './borrowed-book.reducer';

export const BorrowedBookDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const borrowedBookEntity = useAppSelector(state => state.borrowedBook.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="borrowedBookDetailsHeading">
          <Translate contentKey="jhipsterFirstApp.borrowedBook.detail.title">BorrowedBook</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{borrowedBookEntity.id}</dd>
          <dt>
            <span id="borrowDate">
              <Translate contentKey="jhipsterFirstApp.borrowedBook.borrowDate">Borrow Date</Translate>
            </span>
          </dt>
          <dd>
            {borrowedBookEntity.borrowDate ? (
              <TextFormat value={borrowedBookEntity.borrowDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="jhipsterFirstApp.borrowedBook.book">Book</Translate>
          </dt>
          <dd>{borrowedBookEntity.book ? borrowedBookEntity.book.name : ''}</dd>
          <dt>
            <Translate contentKey="jhipsterFirstApp.borrowedBook.client">Client</Translate>
          </dt>
          <dd>{borrowedBookEntity.client ? borrowedBookEntity.client.email : ''}</dd>
        </dl>
        <Button tag={Link} to="/borrowed-book" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/borrowed-book/${borrowedBookEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BorrowedBookDetail;
