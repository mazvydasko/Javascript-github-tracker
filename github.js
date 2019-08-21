class gitHub {
  constructor() {
    this.client_id = "616def0ef5788eba4557";
    this.client_secret = "3364b4f21f626152f3ca3fe73e9f4636f4e8313e";
    this.repos_count = 5;
    this.repos_sort = "created: asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }



  }
}

