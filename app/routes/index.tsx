import * as OutlineIcons from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid';

import { HeroVideo } from '../../app/components/hero-video';
import { Features } from '../../app/components/features';

const features = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: OutlineIcons.LockClosedIcon,
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: OutlineIcons.LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: OutlineIcons.LockClosedIcon,
  },
  {
    name: 'Advanced Security',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
    icon: OutlineIcons.LockClosedIcon,
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
    icon: OutlineIcons.CogIcon,
  },
  {
    name: 'Database Backups',
    description:
      'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
    icon: OutlineIcons.ServerIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
];

export default function Index() {
  return (
    <>
      <main>
        <HeroVideo
          video="/assets/videos/city.mp4"
          title="Lorem Ipsum"
          subtitle="Dolor Sit Amet"
        />
        {/* Logo cloud */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-semibold text-clickco-gray-500">
              Trusted by over 5 very average small businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature section with screenshot */}
        <div className="relative bg-clickco-gray-50 pt-16 sm:pt-24 lg:pt-32">
          <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-base font-semibold tracking-wider text-clickco-turquoise-600 uppercase">
                Lorem Ipsum
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-clickco-blue-500 tracking-tight sm:text-4xl">
                Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet.
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-clickco-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean
                nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
              </p>
            </div>
            <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
              <img
                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <Features features={features} />

        {/* Testimonial section */}
        <div className="pb-16 bg-gradient-to-r from-clickco-turquoise-500 to-clickco-turquoise-600 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 relative aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Sed urna nulla vitae laoreet
                      augue. Amet feugiat est integer dolor auctor
                      adipiscing nunc urna, sit.
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">
                      Judith Black
                    </p>
                    <p className="text-base font-medium text-clickco-turquoise-100">
                      CEO at PureInsights
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Blog section */}
        <div className="relative bg-clickco-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="relative">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-clickco-turquoise-600 uppercase">
                Learn
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-clickco-blue-500 tracking-tight sm:text-4xl">
                Helpful Resources
              </p>
              <p className="mt-5 mx-auto max-w-prose text-xl text-clickco-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean
                nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-clickco-turquoise-600">
                        <a
                          href={post.category.href}
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-clickco-blue-500">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-clickco-gray-500">
                          {post.preview}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt={post.author.name}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-clickco-blue-500">
                          <a
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-clickco-gray-500">
                          <time dateTime={post.datetime}>
                            {post.date}
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingLength} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-clickco-blue-500">
          <div className="relative h-56 bg-clickco-turquoise-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
              alt=""
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-clickco-turquoise-400 to-clickco-turquoise-700 mix-blend-multiply"
            />
          </div>
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-base font-semibold uppercase tracking-wider text-clickco-gray-300">
                Award winning support
              </h2>
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                We???re here to help
              </p>
              <p className="mt-3 text-lg text-clickco-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Et, egestas tempus tellus etiam sed. Quam a
                scelerisque amet ullamcorper eu enim et fermentum,
                augue. Aliquet amet volutpat quisque ut interdum
                tincidunt duis.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-clickco-blue-500 bg-white hover:bg-clickco-gray-50"
                  >
                    Visit the help center
                    <ExternalLinkIcon
                      className="-mr-1 ml-3 h-5 w-5 text-clickco-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
