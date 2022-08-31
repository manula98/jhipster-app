import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/publisher">
        <Translate contentKey="global.menu.entities.publisher" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/author">
        <Translate contentKey="global.menu.entities.author" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/client">
        <Translate contentKey="global.menu.entities.client" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/book">
        <Translate contentKey="global.menu.entities.book" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/borrowed-book">
        <Translate contentKey="global.menu.entities.borrowedBook" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
