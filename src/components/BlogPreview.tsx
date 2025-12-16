// import { BLOG_POSTS } from "@/content/blog";

// export default function BlogPreview() {
//   const posts = BLOG_POSTS.slice(0, 3);

//   return (
//     <section className="mt-10">
//       <div className="flex items-end justify-between gap-4">
//         <h2 className="text-lg font-semibold tracking-tight text-white">
//           Blog
//         </h2>
//         <span className="text-sm text-white/50">
//           thoughts, notes, progress
//         </span>
//       </div>

//       <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
//         {posts.length === 0 ? (
//           <p className="text-sm text-white/60">
//             No posts yet — this section will track what I’m building, learning, and thinking about.
//           </p>
//         ) : (
//           <ul className="space-y-3">
//             {posts.map((p) => (
//               <li key={p.slug} className="rounded-xl border border-white/10 bg-black/20 p-4">
//                 <div className="flex items-center justify-between gap-3">
//                   <h3 className="font-medium text-white">{p.title}</h3>
//                   <span className="text-xs text-white/50">{p.date}</span>
//                 </div>
//                 <p className="mt-1 text-sm text-white/60">{p.summary}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </section>
//   );
// }