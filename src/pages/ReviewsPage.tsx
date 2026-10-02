import { useState, useMemo } from 'react';
import { Star, MessageSquare, ChevronDown, ChevronUp, Search, Filter, User, Award, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import { BUSINESS_NAME, PHONE, PHONE_DISPLAY, RATING, REVIEW_COUNT } from '@/lib/constants';
import { ALL_REVIEWS, REVIEW_TAGS, type Review } from '@/lib/reviews-data';

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const starSize = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewInitials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on the name
  const colors = [
    'bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-amber-600',
    'bg-rose-600', 'bg-cyan-600', 'bg-indigo-600', 'bg-teal-600',
    'bg-orange-600', 'bg-pink-600',
  ];
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  return (
    <div className={`w-11 h-11 ${colors[colorIndex]} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const isLong = review.text.length > 250;

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <ReviewInitials name={review.name} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-gray-900 text-sm">{review.name}</h3>
              {review.reviewerInfo && (
                <span className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  <Award className="w-3 h-3" />
                  Local Guide
                </span>
              )}
            </div>
            {review.reviewerInfo && (
              <p className="text-xs text-gray-400 mt-0.5">{review.reviewerInfo}</p>
            )}
          </div>
          <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">{review.timeAgo}</span>
        </div>

        {/* Stars */}
        <div className="mb-3">
          <StarRating rating={review.rating} />
        </div>

        {/* Review Text */}
        <div className="relative">
          <p className={`text-gray-600 text-sm leading-relaxed whitespace-pre-line ${!expanded && isLong ? 'line-clamp-4' : ''}`}>
            {review.text}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              {expanded ? (
                <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
              ) : (
                <>Read more <ChevronDown className="w-3.5 h-3.5" /></>
              )}
            </button>
          )}
        </div>

        {/* Tags */}
        {review.tags && review.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {review.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Positive & Services */}
        {review.positive && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {review.positive.map((p) => (
              <span key={p} className="text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100">
                ✓ {p}
              </span>
            ))}
          </div>
        )}
        {review.services && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {review.services.map((s) => (
              <span key={s} className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full border border-blue-100">
                {s}
              </span>
            ))}
          </div>
        )}
        {review.priceAssessment && (
          <div className="mt-2">
            <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-100 font-medium">
              💰 {review.priceAssessment}
            </span>
          </div>
        )}

        {/* Owner Response */}
        {review.ownerResponse && (
          <div className="mt-4">
            <button
              onClick={() => setShowResponse(!showResponse)}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Response from the owner
              {showResponse ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {showResponse && (
              <div className="mt-2.5 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">L&M</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-900">L&M Maintenance and Repair</span>
                  <span className="text-xs text-gray-400">· {review.ownerResponseTime}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{review.ownerResponse}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest'>('newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredReviews = useMemo(() => {
    let reviews = [...ALL_REVIEWS];

    // Filter by tag
    if (activeTag !== 'All') {
      reviews = reviews.filter((r) => r.tags?.includes(activeTag));
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      reviews = reviews.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.text.toLowerCase().includes(q) ||
          r.ownerResponse?.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        // Already in newest-first order from data
        break;
      case 'oldest':
        reviews.reverse();
        break;
      case 'highest':
        reviews.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        reviews.sort((a, b) => a.rating - b.rating);
        break;
    }

    return reviews;
  }, [activeTag, searchQuery, sortBy]);

  // Rating distribution
  const ratingDistribution = useMemo(() => {
    const dist = [0, 0, 0, 0, 0];
    ALL_REVIEWS.forEach((r) => {
      if (r.rating >= 1 && r.rating <= 5) dist[r.rating - 1]++;
    });
    return dist;
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: '5',
      worstRating: '1',
    },
    review: ALL_REVIEWS.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString() },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <SEO
        title={`Customer Reviews | ${BUSINESS_NAME} – Rated ${RATING}/5`}
        description={`Read ${REVIEW_COUNT} real customer reviews of ${BUSINESS_NAME}. See why homeowners in Grand Junction trust us for plumbing, HVAC, and home repairs.`}
        canonical="/reviews"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {REVIEW_COUNT} Verified Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              What Our Customers
              <br />
              <span className="text-blue-400">Are Saying</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Don't just take our word for it. Hear directly from homeowners throughout Grand Junction and Mesa County about their experience with {BUSINESS_NAME}.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-5">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-white">{RATING}</p>
                <StarRating rating={5} size="lg" />
                <p className="text-blue-200 text-sm mt-1">{REVIEW_COUNT} reviews</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="space-y-1.5 text-left">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-blue-200 w-3">{star}</span>
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <div className="w-24 sm:w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
                        style={{ width: `${(ratingDistribution[star - 1] / ALL_REVIEWS.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-blue-300 w-4">{ratingDistribution[star - 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Reviews */}
      <section className="py-12 sm:py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Sort Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviews..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                </select>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`sm:hidden flex items-center gap-2 px-4 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
                    showFilters ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className={`mt-4 ${showFilters ? 'block' : 'hidden sm:block'}`}>
              <div className="flex flex-wrap gap-2">
                {REVIEW_TAGS.map((tag) => (
                  <button
                    key={tag.label}
                    onClick={() => setActiveTag(tag.label)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTag === tag.label
                        ? 'bg-blue-700 text-white shadow-md shadow-blue-200'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {tag.label}
                    <span className={`ml-1.5 text-xs ${activeTag === tag.label ? 'text-blue-200' : 'text-gray-400'}`}>
                      {tag.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filteredReviews.length}</span>{' '}
              {filteredReviews.length === 1 ? 'review' : 'reviews'}
              {activeTag !== 'All' && (
                <span>
                  {' '}for <span className="text-blue-600 font-medium">"{activeTag}"</span>
                </span>
              )}
            </p>
            {(activeTag !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveTag('All');
                  setSearchQuery('');
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {filteredReviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your filters or search query.</p>
            </div>
          )}

          {/* Write a Review CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <Star className="w-48 h-48 -mt-12 -mr-12 text-white fill-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Had a Great Experience?
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                We'd love to hear from you! Your feedback helps us continue to improve and helps other homeowners find reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.google.com/maps/place/L%26M+Maintenance+and+Repair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Star className="w-5 h-5" />
                  Write a Google Review
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us — {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallCTA />
    </>
  );
}
