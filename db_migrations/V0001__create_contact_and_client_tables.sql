-- Создание таблиц для хранения заявок с сайта

-- Таблица для простых заявок обратной связи
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица для расширенных заявок "Стать клиентом"
CREATE TABLE IF NOT EXISTS client_applications (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    website VARCHAR(500),
    contact_name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    project_type VARCHAR(500) NOT NULL,
    budget VARCHAR(255) NOT NULL,
    timeline VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    challenges TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_client_applications_created_at ON client_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_client_applications_email ON client_applications(email);
CREATE INDEX IF NOT EXISTS idx_client_applications_company ON client_applications(company);