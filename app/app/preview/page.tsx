type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variantToClassName = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-l',
  h6: 'text-md',
};

const Headline = ({ variant, children }: { variant: Variant; children: React.ReactNode }) => {
  const Component = variant;
  const className = variantToClassName[variant];

  return <Component className={className}>{children}</Component>;
};

export default function Preview() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative flex items-center justify-evenly py-14 after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:transform after:border-b-2 after:border-b-stone-400 after:content-['']">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">Font Sans</div>
          <div className="mt-4 flex">
            <div className="font-normal">Regular</div>
            <div className="ml-3 border-l-2 border-l-gray-400 pl-3 font-medium">Medium</div>
            <div className="ml-3 border-l-2 border-l-gray-400 pl-3 font-bold">Bold</div>
          </div>
        </div>
        <div>
          <div className="text-center text-8xl">Aa</div>
          <div className="text-center text-2xl">123456789</div>
        </div>
      </div>
      <div className="grid justify-center gap-12 py-14">
        {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as Variant[]).map((variant) => (
          <section
            className="grid font-bold"
            style={{ gridTemplateColumns: 'subgrid', gridColumn: 'span 2' }}
          >
            <Headline variant={variant}>Headline {variant[1]}</Headline>
            <Headline variant={variant}>
              <span>I am a cat. I have, as yet, no name.</span>
              <br />
              <span className="mt-3 inline-block">吾輩は猫である。名前はまだない。</span>
            </Headline>
          </section>
        ))}
      </div>
      <div></div>
    </div>
  );
}
