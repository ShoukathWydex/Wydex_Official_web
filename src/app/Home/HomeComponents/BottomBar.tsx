import React from 'react';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    _id:1,
    img: 'images/the role of content marketing in building brand authority.webp',
    alt: 'The Role of Content Marketing',
    title: 'The Role of Content Marketing in Building Brand Authority',
    excerpt: 'In todays competitive digital landscape, establishing brand authority is essential for businesses aiming to differentiate themselves from competitors and build lasting customer relationships.',
    link: './src/blog1.html',
    category: 'Content Marketing',
    author: 'Sarah Johnson',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    _id:2,
    img: 'images/Influencer marketing in 2025 Trends and strategies for success.webp',
    alt: 'Influencer Marketing in 2025',
    title: 'Influencer Marketing in 2025: Trends and Strategies',
    excerpt: 'Influencer marketing has become a pivotal strategy in the digital landscape, enabling brands to connect authentically with their target audiences through trusted voices.',
    link: './src/blog2.html',
    category: 'Social Media',
    author: 'Mike Chen',
    date: 'Dec 18, 2024',
    readTime: '7 min read',
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    _id:3,
    img: 'images/SEO Meets AI how artificial intelligence is reshaping search in 2025.webp',
    alt: 'SEO Meets AI',
    title: 'SEO Meets AI: How AI is Reshaping Search in 2025',
    excerpt: 'Search Engine Optimization (SEO) is no longer just about keywords, backlinks, and rankings. In 2025, SEO has entered a new era powered by artificial intelligence.',
    link: './src/blog3.html',
    category: 'SEO & AI',
    author: 'David Rodriguez',
    date: 'Dec 20, 2024',
    readTime: '6 min read',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    _id:4,
    img: 'images/Top digital marketing trends to watch in 2025.webp',
    alt: 'Digital Marketing Trends 2025',
    title: 'Top Digital Marketing Trends to Watch in 2025',
    excerpt: 'As we move further into the digital era, the world of marketing continues to evolve at lightning speed. New technologies, shifting consumer behaviors, and emerging platforms.',
    link: './src/blog4.html',
    category: 'Trends',
    author: 'Emily Parker',
    date: 'Dec 22, 2024',
    readTime: '8 min read',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    _id:5,
    img: 'images/the role of content marketing in building brand authority.webp',
    alt: 'The Role of Content Marketing',
    title: 'The Role of Content Marketing in Building Brand Authority',
    excerpt: 'In todays competitive digital landscape, establishing brand authority is essential for businesses aiming to differentiate themselves from competitors and build lasting customer relationships.',
    link: './src/blog1.html',
    category: 'Content Marketing',
    author: 'Sarah Johnson',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    _id:6,
    img: 'images/Influencer marketing in 2025 Trends and strategies for success.webp',
    alt: 'Influencer Marketing in 2025',
    title: 'Influencer Marketing in 2025: Trends and Strategies',
    excerpt: 'Influencer marketing has become a pivotal strategy in the digital landscape, enabling brands to connect authentically with their target audiences through trusted voices.',
    link: './src/blog2.html',
    category: 'Social Media',
    author: 'Mike Chen',
    date: 'Dec 18, 2024',
    readTime: '7 min read',
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    _id:7,
    img: 'images/SEO Meets AI how artificial intelligence is reshaping search in 2025.webp',
    alt: 'SEO Meets AI',
    title: 'SEO Meets AI: How AI is Reshaping Search in 2025',
    excerpt: 'Search Engine Optimization (SEO) is no longer just about keywords, backlinks, and rankings. In 2025, SEO has entered a new era powered by artificial intelligence.',
    link: './src/blog3.html',
    category: 'SEO & AI',
    author: 'David Rodriguez',
    date: 'Dec 20, 2024',
    readTime: '6 min read',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    _id:8,
    img: 'images/Top digital marketing trends to watch in 2025.webp',
    alt: 'Digital Marketing Trends 2025',
    title: 'Top Digital Marketing Trends to Watch in 2025',
    excerpt: 'As we move further into the digital era, the world of marketing continues to evolve at lightning speed. New technologies, shifting consumer behaviors, and emerging platforms.',
    link: './src/blog4.html',
    category: 'Trends',
    author: 'Emily Parker',
    date: 'Dec 22, 2024',
    readTime: '8 min read',
    gradient: 'from-orange-600 to-red-600'
  },
];

function BottomBar() {
  return (
    <section className="bg-black py-20 relative overflow-hidden" id="blog">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Insights & Knowledge
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Latest
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert insights, industry trends, and actionable strategies
            to elevate your digital marketing game.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex flex-nowrap space-x-6 my-3">
            {blogPosts.map((post, index) => (
              <div  key={post._id}>
              <div
               
                className={`${index == 0 && 'ml-5'}  flex-shrink-0 w-80 bg-gray-900 overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 border-gray-800`}
              >
                {/* Image */}
                {/* {console.log(index,' and ',blogPosts.length) } */}
                <div className="relative overflow">
                  <img
                    src={post.img}
                    alt={post.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-3 text-gray-400 text-xs mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    {/* <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>*/}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

            
                  {blogPosts.length-1  == index &&( <div className='text-black'>h</div>)}
             
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomBar;