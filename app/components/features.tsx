function Features({ features }: any) {
  return (
    <>
      {/* Feature section with grid */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-clickco-turquoise-600 uppercase">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-clickco-blue-500 tracking-tight sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-clickco-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla
            in. Accumsan in quis quis nunc, ullamcorper malesuada.
            Eleifend condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-clickco-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-clickco-turquoise-500 to-clickco-turquoise-600 rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-clickco-blue-500 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-clickco-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Features };
