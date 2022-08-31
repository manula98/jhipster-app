import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBook } from 'app/shared/model/book.model';
import { getEntities as getBooks } from 'app/entities/book/book.reducer';
import { IClient } from 'app/shared/model/client.model';
import { getEntities as getClients } from 'app/entities/client/client.reducer';
import { IBorrowedBook } from 'app/shared/model/borrowed-book.model';
import { getEntity, updateEntity, createEntity, reset } from './borrowed-book.reducer';

export const BorrowedBookUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const books = useAppSelector(state => state.book.entities);
  const clients = useAppSelector(state => state.client.entities);
  const borrowedBookEntity = useAppSelector(state => state.borrowedBook.entity);
  const loading = useAppSelector(state => state.borrowedBook.loading);
  const updating = useAppSelector(state => state.borrowedBook.updating);
  const updateSuccess = useAppSelector(state => state.borrowedBook.updateSuccess);

  const handleClose = () => {
    navigate('/borrowed-book' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getBooks({}));
    dispatch(getClients({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...borrowedBookEntity,
      ...values,
      book: books.find(it => it.id.toString() === values.book.toString()),
      client: clients.find(it => it.id.toString() === values.client.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...borrowedBookEntity,
          book: borrowedBookEntity?.book?.id,
          client: borrowedBookEntity?.client?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="jhipsterFirstApp.borrowedBook.home.createOrEditLabel" data-cy="BorrowedBookCreateUpdateHeading">
            <Translate contentKey="jhipsterFirstApp.borrowedBook.home.createOrEditLabel">Create or edit a BorrowedBook</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="borrowed-book-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('jhipsterFirstApp.borrowedBook.borrowDate')}
                id="borrowed-book-borrowDate"
                name="borrowDate"
                data-cy="borrowDate"
                type="date"
              />
              <ValidatedField
                id="borrowed-book-book"
                name="book"
                data-cy="book"
                label={translate('jhipsterFirstApp.borrowedBook.book')}
                type="select"
              >
                <option value="" key="0" />
                {books
                  ? books.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.name}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="borrowed-book-client"
                name="client"
                data-cy="client"
                label={translate('jhipsterFirstApp.borrowedBook.client')}
                type="select"
              >
                <option value="" key="0" />
                {clients
                  ? clients.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.email}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/borrowed-book" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BorrowedBookUpdate;
