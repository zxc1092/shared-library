import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ThemeProvider } from '@zxc1092/mui.theme.theme-provider';
import { createTheme } from '@mui/material';
import { Button } from '@zxc1092/mui.ui.button';
import { ComponentProps } from 'lib/component-props';
import { themeConfig1 } from '@zxc1092/mui.theme.theme-config-1';
import { themeConfig2 } from '@zxc1092/mui.theme.theme-config-2';

type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => (
  <div className="contentBlock">
    <ThemeProvider theme={createTheme(themeConfig2)}>
      <Button variant="contained">Texto</Button>
    </ThemeProvider>
    <Text tag="h2" className="contentTitle" field={fields.heading} />
    <RichText className="contentDescription" field={fields.content} />
  </div>
);

export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
