# ERC721 Token Tracker template with UI

This template provides a starting point for building applications with Hemera indexer integration. It consists of two main components:

1. frontend application
2. Hemera indexer

## How it works:

1. The frontend application is a React application that uses the Hemera indexer to fetch and display ERC721 token transfers.
2. The Hemera indexer is an Account centric indexer which indexes data from our desired chain. 
3. When data extraction happens through UDFs, the data of the ERC721 token transfers is stored in a PostgreSQL database.
4. The frontend application fetches the data from the PostgreSQL database and displays it.


## Prerequisites

- Node.js (v16 or higher)
- Docker (optional, for running Hemera indexer in container)
- Postgres
- python 3.9 (To run the hemera Indexer)

## Getting Started

### 1. Clone the Repository: 

```bash
git clone https://github.com/HemeraProtocol/hemera-indexer-template.git
```

### 2. Install the frontend dependencies: 

```bash
cd hemera-indexer-template
cd frontend
npm install
```
### 3. Install the hemera indexer dependencies: 

```bash
cd hemera-indexer-template
cd hemera-indexer
make development

[ Activate the virtual environment ]
source .venv/bin/activate
```

### 4. Configure the configuration file:

Edit the config/indexer-config-template.yaml file with your desired chain id and contract address.
```yaml
chain_id: 1
demo_job:
    contract_address:
     - "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"` #replace with your contract address
```

### 4. Run the hemera indexer and UDFs: 

```bash
cd hemera-indexer

[ Run the indexer ]
 python3 hemera.py stream \  --provider-uri https://ethereum.publicnode.com \  --start-block 20804100 \  --end-block 20804486 \
  --output-types demo_job \
  --block-batch-size 10000 \
  --postgres-url [postgres-url] #replace with your postgres url
  --output postgres \
  --config-file config/indexer-config-template.yaml
```

### 5. Configure the frontend environment variables:

Edit the .env.local file with your hemera postgres url.

### 6. Run the frontend application:

```bash
cd hemera-indexer-template
cd frontend
npm run dev
```

### 7. Open the frontend application in your browser:

```bash
http://localhost:3000
```

### Tip: 
If you want to verify the data in the database, you can use any of the database tools like DBeaver or pgAdmin. 


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Template Usage

This template is designed to help you quickly start building applications with Hemera. Feel free to:

1. Clone this repository
2. Modify the frontend to match your needs
3. Configure the Hemera indexer UDFs for your specific use case

## Additional Resources

- [Hemera Documentation](https://docs.thehemera.com/)
- [Frontend Documentation](./frontend/README.md)


## Support

For questions and support:
- For Hemera-specific questions, please refer to the [main Hemera repository](https://github.com/HemeraProtocol/hemera-indexer)
- For template-specific questions, please open an issue in this repository 
