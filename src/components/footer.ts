export const Footer = () => {
  return `
    <!-- ========== FOOTER ========== -->
<footer id="footer" class="mt-auto w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gradient-to-r from-slate-800 via-slate-900 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <!-- Grid -->
  <div class="text-center">
    <div>
      <a class="flex-none text-lg sm:text-xl font-semibold text-white dark:text-gray-100" href="#" aria-label="Brand">Ribbit Up Frog Climber</a>
    </div>
    <!-- End Col -->

    <div class="mt-3 space-y-2">
      <p class="text-sm sm:text-base text-gray-400 dark:text-gray-500">We're part of the <a class="text-cyan-400 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-cyan-300" href="https://www.teamk6.games/">TEAM K6</a> family.</p>
      <p class="text-sm sm:text-base text-gray-400 dark:text-gray-500">
        © 2025 TEAM K6.
      </p>
    </div>

    <!-- Social Brands -->
    <div class="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
      <!-- Instagram -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-cyan-800/50 hover:to-teal-800/50 dark:hover:from-cyan-700/50 dark:hover:to-teal-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-cyan-800/50 focus:to-teal-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://www.instagram.com/ribbit.up/" aria-label="Instagram" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
      </a>
      <!-- YouTube -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-red-800/50 hover:to-orange-800/50 dark:hover:from-red-700/50 dark:hover:to-orange-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-red-800/50 focus:to-orange-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://www.youtube.com/@ribbitup" aria-label="YouTube" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
      </a>
      <!-- Discord -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-indigo-800/50 hover:to-purple-800/50 dark:hover:from-indigo-700/50 dark:hover:to-purple-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-indigo-800/50 focus:to-purple-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://discord.gg/BfAHGmCxVg" aria-label="Discord" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
        </svg>
      </a>
      <!-- Steam -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-emerald-800/50 hover:to-teal-800/50 dark:hover:from-emerald-700/50 dark:hover:to-teal-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-emerald-800/50 focus:to-teal-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://store.steampowered.com/app/3667740/Ribbit_Up_Frog_Climber/" aria-label="Steam" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.40a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/>
          <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"/>
        </svg>
      </a>
      <!-- TikTok -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-pink-800/50 hover:to-red-800/50 dark:hover:from-pink-700/50 dark:hover:to-red-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-pink-800/50 focus:to-red-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://www.tiktok.com/@ribbitup" aria-label="TikTok" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
        </svg>
      </a>
      <!-- LinkedIn -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-blue-800/50 hover:to-blue-700/50 dark:hover:from-blue-700/50 dark:hover:to-blue-600/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-blue-800/50 focus:to-blue-700/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="https://www.linkedin.com/company/teamk6/" aria-label="LinkedIn" target="_blank">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </a>
      <!-- Mail -->
      <a class="w-10 h-10 sm:size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-400 hover:bg-gradient-to-r hover:from-orange-800/50 hover:to-yellow-800/50 dark:hover:from-orange-700/50 dark:hover:to-yellow-700/50 focus:outline-hidden focus:bg-gradient-to-r focus:from-orange-800/50 focus:to-yellow-800/50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 transition-all duration-200" href="mailto:ka6andev@gmail.com" aria-label="Email">
        <svg class="shrink-0 w-4 h-4 sm:size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg>
      </a>
    </div>
    <!-- End Social Brands -->
  </div>
  <!-- End Grid -->
</footer>
<!-- ========== END FOOTER ========== -->
    `
}