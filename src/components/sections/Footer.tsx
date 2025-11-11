const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center text-xs sm:text-sm text-muted-foreground space-y-3 sm:space-y-4">
          <div className="space-y-1 sm:space-y-2">
            <p className="font-semibold text-foreground text-sm sm:text-base">ООО "ОПТИМЛАЙН"</p>
            <p className="text-xs sm:text-sm">ИНН: 7717701387 | ОГРН: 1117746457278</p>
            <p className="text-xs sm:text-sm leading-relaxed px-4">129164, город Москва, Ракетный б-р, д. 16, эт. 13 пом 25</p>
          </div>
          
          <div className="pt-3 sm:pt-4 border-t border-border/30">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Scalper.io. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;