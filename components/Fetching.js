const Fetching = () => {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      this.setState({ dogUrl: data.message })
    })
  }

  render() {
    if (this.state && this.state.dogUrl) {
      return <img src={this.state.dogUrl} alt='random' />
    }
    return <h3>Loading...</h3>
  }
}

export default Fetching