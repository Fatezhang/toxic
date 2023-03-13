const HomePage = () => (
  <div className="hero h-full">
    <div className="flex flex-col hero-content">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold">Hi mate! 👋</h1>
        <p className="py-6">
          When you open this app, I believe you are also a geek-dev and full of passion with programming.
          Also you want to make some tools for your coworkers to improve the development efficiency? Start
          to contribute to this repo! Build cool stuffs here!
        </p>
      </div>
      <div className="mockup-code w-full">
        <pre data-prefix="$"><code>cd toxic</code></pre>
        <pre data-prefix="$"><code>yarn install</code></pre>
        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        <pre data-prefix="$"><code>idea .</code></pre>
        <pre data-prefix="$"><code>yarn tauri dev</code></pre>
      </div>
    </div>
  </div>
);

export { HomePage };
