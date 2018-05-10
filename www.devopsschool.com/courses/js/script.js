// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller



function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.
	


	$scope.items = [
		{
			url: 'agenda/devops/devops-training-course-online.html',
			title: 'Devops Training Course - Online',
			image: 'images/search/devops-training.png'
		},
		{
			url: 'http://www.scmgalaxy.com/events/index.html',
			title: 'DevOps Training Course - Workshop',
			image: 'images/search/devops-training.png'
		},
		{
			url: 'agenda/devops/devops-training-course-Java.html',
			title: 'DevOps Training Course - Java',
			image: 'images/search/devops-training.png'
		},
		{
			url: 'agenda/devops/devops-training-course-dot-net.html',
			title: 'DevOps Training Course - DOT NET',
			image: 'images/search/devops-training.png'
		},
		{
			url: 'agenda/devops/devops-training-and-certification.html',
			title: 'DevOps Training and Certification',
			image: 'images/search/devops-training.png'
		},
		{
			url: 'agenda/devops/devops-training-mobile-app-development.html',
			title: 'DevOps Training Mobile App Development',
			image: 'images/search/devops-training.png'
		},
		
		{
			url: 'agenda/build-and-release/build-and-release-training-course-Online.html',
			title: 'Build and Release Training Course - Online',
			image: 'images/search/build-n-release.png'
		},
		{
			url: 'http://www.scmgalaxy.com/events/index.html',
			title: 'Build and Release Course - Workshop',
			image: 'images/search/build-n-release.png'
		},
		{
			url: 'agenda/build-and-release/build-and-release-training-course-online-java.html',
			title: 'Build and Release Course - Java',
			image: 'images/search/build-n-release.png'
		},
		{
			url: 'agenda/build-and-release/build-and-release-training-course-online-dotnet.html',
			title: 'Build and Release Course - DOT NET',
			image: 'images/search/build-n-release.png'
		},
		{
			url: 'agenda/build-and-release/build-and-release-training-certification.html',
			title: 'Build and Release Training Certification',
			image: 'images/search/build-n-release.png'
		},
		{
			url: 'agenda/source-code-management-tools/git-training.html',
			title: 'Git Courses & Training',
			image: 'images/search/git.png'
		},
		
		{
			url: 'agenda/source-code-management-tools/github-administrator-training.html',
			title: 'Github Courses & Training',
			image: 'images/search/github.png'
		},
		{
			url: 'agenda/source-code-management-tools/gitlab-administrator-training.html',
			title: 'Gitlab Courses & Training',
			image: 'images/search/gitlab.png'
		},
		{
			url: 'agenda/source-code-management-tools/gerrit-user-administrator-training.html',
			title: 'Gerrit Courses & Training',
			image: 'images/search/gerrit.png'
		},
		{
			url: 'agenda/source-code-management-tools/bitbucket-administrator-training.html',
			title: 'Bitbucket Courses & Training',
			image: 'images/search/bitbucket.png'
		},
		{
			url: 'agenda/source-code-management-tools/perforce-administrator-training.html',
			title: 'Perforce Courses & Training',
			image: 'images/search/perforce.png'
		},
		{
			url: 'agenda/source-code-management-tools/team-foundation-server-training.html',
			title: 'Team Foundation Server Training',
			image: 'images/search/team-foundation-server.png'
		},
		{
			url: 'agenda/source-code-management-tools/subversion-training.html',
			title: 'Subversion Courses & Training',
			image: 'images/search/subversion.png'
		},
		{
			url: 'agenda/build-management-tools/apache-maven-training.html',
			title: 'Apache Maven Courses & Training',
			image: 'images/search/maven.png'
		},
		{
			url: 'agenda/build-management-tools/gradle-training.html',
			title: 'Gradle Courses & Training',
			image: 'images/search/gradle.png'
		},
		{
			url: 'agenda/build-management-tools/apache-ant-training.html',
			title: 'Apache Ant Courses & Training',
			image: 'images/search/ant.png'
		},
		{
			url: 'agenda/build-management-tools/msbuild-training.html',
			title: 'MsBuild Courses & Training',
			image: 'images/search/msbuild.png'
		},
		{
			url: 'agenda/build-management-tools/nant-training.html',
			title: 'Nant Courses & Training',
			image: 'images/search/nant.png'
		},
		{
			url: 'agenda/build-management-tools/makefile-training.html',
			title: 'Makefile Courses & Training',
			image: 'images/search/makefile.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/nuget-training.html',
			title: 'Nuget Courses & Training',
			image: 'images/search/nuget.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/rpm.html',
			title: 'RPM Courses & Training',
			image: 'images/search/rpm.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/apt-training.html',
			title: 'Apt Courses & Training',
			image: 'images/search/apt.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/yum-training.html',
			title: 'Yum Courses & Training',
			image: 'images/search/yum.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/nexus-training.html',
			title: 'Nexus Courses & Training',
			image: 'images/search/nexus.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/artifactory-training.html',
			title: 'Artifactory Courses & Training',
			image: 'images/search/artifactory.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/apache-archiva-training.html',
			title: 'Apache Archiva Courses & Training',
			image: 'images/search/archiva.png'
		},
		{
			url: 'agenda/package-and-repository-management-tools/chocolatey-training.html',
			title: 'Chocolatey Courses & Training',
			image: 'images/search/chocolatey.png'
		},
		{
			url: 'agenda/configuration-management-tools/puppet-training.html',
			title: 'Puppet Courses & Training',
			image: 'images/search/puppet.png'
		},
		{
			url: 'agenda/configuration-management-tools/chef-training.html',
			title: 'Chef Courses &  Training',
			image: 'images/search/chef.png'
		},
		{
			url: 'agenda/application-deployment/octopus-deploy-training.html',
			title: 'Octopus Deploy Server',
			image: 'images/search/octopus-deploy.png'
		},
		{
			url: 'agenda/application-deployment/xl-deploy-training-course.html',
			title: 'XL Deploy',
			image: 'images/search/xl-deploy-small.png'
		},
		{
			url: 'agenda/configuration-management-tools/ansible-training.html',
			title: 'Ansible Courses & Training',
			image: 'images/search/ansible.png'
		},
		{
			url: 'agenda/continous-integration-tools/bamboo-training.html',
			title: 'Bamboo Courses & Training',
			image: 'images/search/bamboo.png'
		},
		{
			url: 'agenda/continous-integration-tools/jenkins-training.html',
			title: 'Jenkins Courses & Training',
			image: 'images/search/jenkins.png'
		},
		{
			url: 'agenda/continous-integration-tools/teamcity-training.html',
			title: 'Teamcity Courses & Training',
			image: 'images/search/teamcity.png'
		},
		{
			url: 'agenda/continous-integration-tools/team-foundation-server-training.html',
			title: 'Team Foundation Server Training',
			image: 'images/search/team-foundation-server.png'
		},
		{
			url: 'agenda/continous-integration-tools/ibm-rational-build-forge-training.html',
			title: 'Build Forge Courses & Training',
			image: 'images/search/buildforge.png'
		},
		{
			url: 'agenda/continous-integration-tools/ubuild-udeploy-and-urelease-training.html',
			title: 'Ubuild Udeploy Urelease Courses & Training',
			image: 'images/search/ubuild-udeploy-urelease.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/docker-training.html',
			title: 'Docker Courses & Training',
			image: 'images/search/docker.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/vagrant-training.html',
			title: 'Vagrant Courses & Training',
			image: 'images/search/vagrant.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/codenvy-training.html',
			title: 'Codenvy Courses & Training',
			image: 'images/search/codenvy.png'
		},
		{
			url: 'agenda/issues-and-bug-tracking-tools/jira-training.html',
			title: 'Jira Courses & Training',
			image: 'images/search/jira.png'
		},
		{
			url: 'agenda/issues-and-bug-tracking-tools/zendesk-training.html',
			title: 'Zendesk Courses & Training',
			image: 'images/search/zendesk.png'
		},
		{
			url: 'agenda/monitoring-tools/logstash-training.html',
			title: 'Logstash Courses & Training',
			image: 'images/search/logstash.png'
		},
		{
			url: 'agenda/monitoring-tools/elasticsearch.html',
			title: 'Elastic Courses & Training',
			image: 'images/search/elasticsearch.jpg'
		},
		{
			url: 'agenda/monitoring-tools/kibana-training.html',
			title: 'Kibana Courses & Training',
			image: 'images/search/kibana.png'
		},
		{
			url: 'agenda/monitoring-tools/mssystemcenter-training.html',
			title: 'Microsoft System Center Training',
			image: 'images/search/mssystemcenter.png'
		},
		{
			url: 'agenda/monitoring-tools/stash-training.html',
			title: 'Stash Courses & Training',
			image: 'images/search/stashd.png'
		},
		{
			url: 'agenda/monitoring-tools/graphite-training.html',
			title: 'Graphite Courses and Training',
			image: 'images/search/graphite.png'
		},
		{
			url: 'agenda/monitoring-tools/newrelic-training.html',
			title: 'Newrelic Courses and Training',
			image: 'images/search/newrelic.png'
		},
		{
			url: 'agenda/monitoring-tools/nagios.html',
			title: 'Nagios Courses and  Training',
			image: 'images/search/nagios.png'
		},
		{
			url: 'agenda/monitoring-tools/splunk.html',
			title: 'Splunk Courses and Training',
			image: 'images/search/splunk.png'
		},
		{
			url: 'agenda/monitoring-tools/graylog.html',
			title: 'Graylog Courses and Training',
			image: 'images/search/graylog.jpeg'
		},
		{
			url: 'agenda/build-management-tools/grunt-courses-and-training.html',
			title: 'Grunt Courses and Training',
			image: 'images/search/grunt.png'
		},
		{
			url: 'agenda/continous-integration-tools/team-foundation-build-2010-training.html',
			title: 'Team Foundation Build 2010 Training',
			image: 'images/search/team-foundation-server.png'
		},
		{
			url: 'agenda/continous-integration-tools/team-foundation-server-2015-training.html',
			title: 'Team Foundation Server 2015 Training',
			image: 'images/search/team-foundation-server-2015.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/microservices-and-containers-essentials.html',
			title: 'Microservices and Containers Essentials',
			image: 'images/search/devops-cicd.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/kubernetes-training.html',
			title: 'Kubernates Courses & Training',
			image: 'images/search/kubernetes.png'
		},
		{
			url: 'agenda/cloud-tools/openstake-training.html',
			title: 'Openstake Courses and Training',
			image: 'images/search/openstack.png'
		},
		{
			url: 'agenda/code-analysis-tools/sonarqube-training.html',
			title: 'Sonarqube Courses & Training',
			image: 'images/search/sonarqube.png'
		},
		{
			url: 'agenda/code-coverage-tools/cobertura-training.html',
			title: 'Cobertura Courses & Training',
			image: 'images/search/cobertura.png'
		},
		{
			url: 'agenda/code-coverage-tools/coverity-training.html',
			title: 'Coverity Courses & Training',
			image: 'images/search/coverity.png'
		},
		{
			url: 'agenda/code-coverage-tools/jacoco-traning.html',
			title: 'Jacoco Courses & Training',
			image: 'images/search/jacoco.png'
		},
		{
			url: 'agenda/programming-languages/groovy-training.html',
			title: 'Groovy Courses & Training',
			image: 'images/search/groovy.png'
		},
		{
			url: 'agenda/programming-languages/perl-training.html',
			title: 'Perl Courses & Training',
			image: 'images/search/perl.png'
		},
		{
			url: 'agenda/programming-languages/python-training.html',
			title: 'Python Courses & Training',
			image: 'images/search/python.png'
		},
		{
			url: 'agenda/programming-languages/ruby-training.html',
			title: 'Ruby Courses & Training',
			image: 'images/search/ruby.png'
		},
		{
			url: 'agenda/scripting-languages/bash-scripting-training.html',
			title: 'Bash Scripting Courses & Training',
			image: 'images/search/bash-scripting.png'
		},
		{
			url: 'agenda/scripting-languages/powershell-training.html',
			title: 'Powershell Courses & Training',
			image: 'images/search/powershell.png'
		},
		{
			url: 'agenda/test-automation/testing-automation.html',
			title: 'Testing Automation',
			image: 'images/search/automation.png'
		},
		{
			url: 'agenda/continous-integration-tools/ucd.html',
			title: 'UrbanCode Deploy Courses and Training',
			image: 'images/search/urbancode-deploy.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/cloud-computing-essentials.html',
			title: 'Cloud Computing Essentials',
			image: 'images/search/cloud-computing.png'
		},
		{
			url: 'agenda/devops/devops-process-and-concept.html',
			title: 'Devops Process and Concept',
			image: 'images/search/devops-process-and-concept.png'
		},
		{
			url: 'agenda/devops/devops-workshop-corp.html',
			title: 'DevOps Workshop Plan',
			image: 'images/search/devops-workshop.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/complete-aws-course-5days.html',
			title: 'Complete AWS Course in 5 Day',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/devops/continuous-integration-training.html',
			title: 'Continuous Integration Training',
			image: 'images/search/devops-cicd.png'
		},
				{
			url: 'agenda/virtulization-and-container-tools/aws-all-courses.html',
			title: 'Amazon AWS All Courses',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulizat`ion-and-container-tools/aws-amazon-web-services-databases-in-depth.html',
			title: 'AWS Databaes Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-architecting-highly-available-systems.html',
			title: 'AWS Architecting & High Availability Courses',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-certified-developer-associate.html',
			title: 'AWS Certied Developer Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-certified-devops-engineer-professional.html',
			title: 'AWS Certied DevOps Professional Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-certified-sysops-administrator-associate.html',
			title: 'AWS Certied Solution Architect Associate Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-certified-solutions-architect-professional.html',
			title: 'AWS Certied Solution Architect Professional Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-certified-sysops-administrator-associate.html',
			title: 'AWS Certied SysOps Administrator Associate Course',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-complete-training.html',
			title: 'AWS 5 Days Complete Training',
			image: 'images/search/amazon.png'
		},
		{
			url: 'agenda/virtulization-and-container-tools/aws-security-essential.html',
			title: 'AWS Security Essential',
			image: 'images/search/amazon.png'
		},
		
		
	];


}
