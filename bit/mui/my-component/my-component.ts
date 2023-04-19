
export type MyComponentProps = {
  text: string
}
export function MyComponent({text}: MyComponentProps) {
  return `<div>${text}</div>`;
}
