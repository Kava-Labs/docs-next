import { Link as MUILink, LinkProps } from '@material-ui/core';
import { H6 } from './index';

/**
 * @description if passed `external`, opens new tab and includes target="_blank" and rel="noreferrer"
 * @note the default behavior is <H6> and display='inline' if passed text. If you pass a child component you must specify display="inline"
 * If you want the child component to be purple, also pass a color="inherit" to the child component
 * @example const default = (<H6><Link>My link is an H6</Link></H6>); const customChild = (<H3><Link><H3 display="inline" color="inherit">I must specify display</H3></Link></H3>)
 */
export const Link = ({
  external = false,
  ...props
}: LinkProps & { external?: boolean }) => {
  let target: string | undefined;
  if (props.target) target = props.target;
  else if (external) target = '_blank';

  let rel: string | undefined;
  if (props.rel) rel = props.rel;
  else if (external) rel = 'noreferrer';

  let elementChild =
    typeof props.children !== 'string' && typeof props.children !== 'number';

  return (
    <MUILink
      display={props.display ?? 'inline'}
      {...props}
      target={target}
      rel={rel}
    >
      {elementChild ? ( // this solves the compiler error "h6 cannot be child of `x`". If this component is passed a string or number, it will render as an H6, if not it will render the child component
        props.children
      ) : (
        <H6 display="inline" color="inherit">
          {props.children}
        </H6>
      )}
    </MUILink>
  );
};
