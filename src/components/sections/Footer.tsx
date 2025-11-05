const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center text-sm text-muted-foreground space-y-4">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">ООО "ОПТИМЛАЙН"</p>
            <p>ИНН: 7717701387 | ОГРН: 1117746457278</p>
            <p>129164, город Москва, Ракетный б-р, д. 16, эт. 13 пом 25</p>
          </div>
          
          <div className="pt-4 border-t border-border/30">
            <p>© {new Date().getFullYear()} TechFlow. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
