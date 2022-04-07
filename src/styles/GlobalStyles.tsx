import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const xyz = true;

const customStyles = css({
    body: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        ...(xyz ? tw`bg-black` : tw`bg-white`),
        ...tw`text-white`,
        WebkitTapHighlightColor: theme`colors.purple.500`,
        ...tw`antialiased`,
    },
   
});

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;
