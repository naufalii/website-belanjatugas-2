import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: 'Rizky A.',
    rating: 5,
    date: '14 Mar 2026',
    comment:
      'Tugas web saya selesai dalam 1 hari! Hasilnya rapi banget, dosen langsung puas. Sangat recommended buat yang lagi kepepet deadline.',
  },
  {
    id: 2,
    name: 'Siti N.',
    rating: 5,
    date: '10 Mar 2026',
    comment:
      'Makalah ilmiahnya lengkap dan sesuai format yang diminta. Revisi juga gratis dan direspon cepat. Pasti balik lagi!',
  },
  {
    id: 3,
    name: 'Budi P.',
    rating: 4,
    date: '5 Mar 2026',
    comment:
      'Pelayanannya ramah dan harga terjangkau. Hasil tugasnya memuaskan, komunikasi lancar dari awal hingga selesai.',
  },
];

const StarRating = ({ rating, interactive = false, onRate }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? 'button' : 'button'}
          disabled={!interactive}
          onClick={() => interactive && onRate(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`transition-transform ${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} disabled:pointer-events-none`}
        >
          <Star
            className={`w-5 h-5 transition-colors ${
              star <= (interactive ? (hovered || rating) : rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-secondary/40'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError('Mohon lengkapi semua field dan pilih rating bintang.');
      return;
    }
    setError('');

    const now = new Date();
    const date = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

    setReviews((prev) => [
      { id: Date.now(), name: name.trim(), rating, date, comment: comment.trim() },
      ...prev,
    ]);

    setName('');
    setRating(0);
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="reviews">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-60 bg-accent-dark/15 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Kata Mereka yang Sudah{' '}
            <span className="text-accent-light">Lulus Sensor Dosen</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-lg max-w-xl mx-auto"
          >
            Bagikan pengalamanmu atau baca cerita sukses klien kami!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* --- Form Section --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-primary mb-6">✍️ Tulis Ulasanmu</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-secondary block mb-1.5">Nama Kamu</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/50" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Misal: Rizky A."
                    className="w-full bg-background/60 border border-white/10 text-primary placeholder-secondary/40 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-light/60 transition-colors"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="text-sm font-medium text-secondary block mb-2">Rating Bintang</label>
                <StarRating rating={rating} interactive onRate={setRating} />
              </div>

              {/* Comment */}
              <div>
                <label className="text-sm font-medium text-secondary block mb-1.5">
                  Komentar / Kritik
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ceritakan pengalamanmu bersama BelanjaTugas..."
                  rows={4}
                  className="w-full bg-background/60 border border-white/10 text-primary placeholder-secondary/40 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-accent-light/60 transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {error && <p className="text-red-400 text-xs">{error}</p>}

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="flex items-center justify-center gap-2 bg-accent-light hover:bg-accent-dark text-white font-semibold py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:shadow-[0_0_25px_rgba(138,43,226,0.5)]"
              >
                <Send className="w-4 h-4" />
                Kirim Ulasan
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-green-400 text-sm font-medium"
                  >
                    ✅ Ulasan kamu berhasil dikirim!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* --- Reviews List --- */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <AnimatePresence>
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card/70 backdrop-blur-md border border-white/5 hover:border-accent-light/20 rounded-2xl p-6 transition-colors duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">{review.name}</p>
                        <p className="text-xs text-secondary/60">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">{review.comment}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
