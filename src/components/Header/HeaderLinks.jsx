/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link to="/blogs">
              <Button color="transparent"
                      className={classes.navLink}
                      style={{color: 'pink'}}  >
                Les articles
            </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/store">
              <Button color="transparent"
                      style={{color: 'pink'}}
                      className={classes.navLink}>
                  Le shop
              </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/about">
              <Button color="transparent"
                      style={{color: 'pink'}}
                      className={classes.navLink}>
                  À propo du projet
              </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link to="/contact-us">
              <Button color="transparent"
                      style={{color: 'pink'}}
                      className={classes.navLink}>
                  Nous contacter
              </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Suivez-nous sur twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/Sexus47352406"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Suivez-nous sur facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Sexus-105005727668518"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        </Tooltip>
      </ListItem>
      {/*<ListItem className={classes.listItem}>*/}
        {/*<Tooltip*/}
          {/*id="instagram-tooltip"*/}
          {/*title="Follow us on instagram"*/}
          {/*placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}*/}
          {/*classes={{ tooltip: classes.tooltip }}*/}
        {/*>*/}
          {/*<Button*/}
            {/*color="transparent"*/}
            {/*href="https://www.instagram.com/CreativeTimOfficial"*/}
            {/*target="_blank"*/}
            {/*className={classes.navLink}*/}
          {/*>*/}
            {/*<FaInstagram/>*/}
          {/*</Button>*/}
        {/*</Tooltip>*/}
      {/*</ListItem>*/}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
